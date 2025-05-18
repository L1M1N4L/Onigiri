import { db } from '../config/firebase';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, query, where, orderBy, limit } from 'firebase/firestore';

export interface TestResult {
  id: string;
  userId: string;
  testId: string;
  type: 'full' | 'section';
  level: string;
  section?: string;
  score: number;
  sections?: {
    grammar: number;
    vocabulary: number;
    reading: number;
  };
  duration: string;
  date: string;
  answers: {
    questionId: string;
    selectedAnswer: string;
    isCorrect: boolean;
  }[];
}

export interface TestProgress {
  currentLevel: string;
  nextLevel: string;
  simulationScore: number;
  requiredScore: number;
  testHistory: TestResult[];
  availableTests: {
    id: string;
    type: 'full' | 'section';
    level: string;
    title: string;
    description: string;
    duration: string;
    sections: string[];
    unlocked: boolean;
    lastAttempt: string | null;
    bestScore: number | null;
    passingProbability: number;
  }[];
}

export const testService = {
  async getUserTestProgress(userId: string): Promise<TestProgress> {
    const userDoc = await getDoc(doc(db, 'users', userId));
    const userData = userDoc.data();
    
    // Get user's test history
    const testHistoryQuery = query(
      collection(db, 'testResults'),
      where('userId', '==', userId),
      orderBy('date', 'desc'),
      limit(10)
    );
    const testHistorySnapshot = await getDocs(testHistoryQuery);
    const testHistory = testHistorySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as TestResult[];

    // Calculate current level and progress
    const currentLevel = userData?.currentLevel || 'N5';
    const nextLevel = userData?.nextLevel || 'N4';
    const simulationScore = userData?.simulationScore || 0;
    const requiredScore = 80; // Standard required score for next level

    // Get available tests
    const availableTests = [
      {
        id: 'full-n5',
        type: 'full' as const,
        level: 'N5',
        title: 'Full JLPT N5 Practice Test',
        description: 'Complete N5 practice test with all sections',
        duration: '2 hours',
        sections: ['Grammar', 'Vocabulary', 'Reading'],
        unlocked: true,
        lastAttempt: testHistory.find(t => t.testId === 'full-n5')?.date || null,
        bestScore: testHistory.find(t => t.testId === 'full-n5')?.score || null,
        passingProbability: 0.68
      },
      {
        id: 'grammar-n5',
        type: 'section' as const,
        level: 'N5',
        title: 'N5 Grammar Practice',
        description: 'Practice grammar questions for N5 level',
        duration: '30 minutes',
        sections: ['Grammar'],
        unlocked: true,
        lastAttempt: testHistory.find(t => t.testId === 'grammar-n5')?.date || null,
        bestScore: testHistory.find(t => t.testId === 'grammar-n5')?.score || null,
        passingProbability: 0.75
      },
      {
        id: 'vocab-n5',
        type: 'section' as const,
        level: 'N5',
        title: 'N5 Vocabulary Practice',
        description: 'Practice vocabulary questions for N5 level',
        duration: '30 minutes',
        sections: ['Vocabulary'],
        unlocked: true,
        lastAttempt: testHistory.find(t => t.testId === 'vocab-n5')?.date || null,
        bestScore: testHistory.find(t => t.testId === 'vocab-n5')?.score || null,
        passingProbability: 0.80
      },
      {
        id: 'reading-n5',
        type: 'section' as const,
        level: 'N5',
        title: 'N5 Reading Practice',
        description: 'Practice reading comprehension for N5 level',
        duration: '30 minutes',
        sections: ['Reading'],
        unlocked: false,
        lastAttempt: null,
        bestScore: null,
        passingProbability: 0.55
      }
    ];

    return {
      currentLevel,
      nextLevel,
      simulationScore,
      requiredScore,
      testHistory,
      availableTests
    };
  },

  async saveTestResult(result: Omit<TestResult, 'id'>): Promise<void> {
    const testResultRef = doc(collection(db, 'testResults'));
    await setDoc(testResultRef, {
      ...result,
      id: testResultRef.id
    });

    // Update user's progress
    const userRef = doc(db, 'users', result.userId);
    const userDoc = await getDoc(userRef);
    const userData = userDoc.data();

    if (userData) {
      const newSimulationScore = Math.max(
        userData.simulationScore || 0,
        result.score
      );

      await updateDoc(userRef, {
        simulationScore: newSimulationScore,
        lastTestDate: result.date,
        lastTestScore: result.score
      });
    }
  }
}; 