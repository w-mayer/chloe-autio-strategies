'use client';

import React from 'react';
import { ErrorBoundary, FormErrorBoundary, ContentErrorBoundary } from '@/components/ui';

// Component that throws an error for testing
function BuggyComponent() {
  const [shouldError, setShouldError] = React.useState(false);

  if (shouldError) {
    throw new Error('This is a test error for the error boundary!');
  }

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Buggy Component</h3>
      <p className="mb-4">This component can throw an error for testing purposes.</p>
      <button
        onClick={() => setShouldError(true)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Trigger Error
      </button>
    </div>
  );
}

// Component that simulates a form error
function BuggyForm() {
  const [shouldError, setShouldError] = React.useState(false);

  if (shouldError) {
    throw new Error('Form processing error!');
  }

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Buggy Form</h3>
      <p className="mb-4">This form can throw an error for testing purposes.</p>
      <button
        onClick={() => setShouldError(true)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Trigger Form Error
      </button>
    </div>
  );
}

// Component that simulates a content error
function BuggyContent() {
  const [shouldError, setShouldError] = React.useState(false);

  if (shouldError) {
    throw new Error('Content loading error!');
  }

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Buggy Content</h3>
      <p className="mb-4">This content can throw an error for testing purposes.</p>
      <button
        onClick={() => setShouldError(true)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Trigger Content Error
      </button>
    </div>
  );
}

export function ErrorBoundaryExample() {
  return (
    <div className="space-y-8 p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Error Boundary Examples</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Click the buttons below to test different types of error boundaries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* General Error Boundary */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">General Error Boundary</h3>
          <ErrorBoundary>
            <BuggyComponent />
          </ErrorBoundary>
        </div>

        {/* Form Error Boundary */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Form Error Boundary</h3>
          <FormErrorBoundary>
            <BuggyForm />
          </FormErrorBoundary>
        </div>

        {/* Content Error Boundary */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Content Error Boundary</h3>
          <ContentErrorBoundary>
            <BuggyContent />
          </ContentErrorBoundary>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">How Error Boundaries Work</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Error boundaries catch JavaScript errors anywhere in their child component tree</li>
          <li>They log those errors and display a fallback UI instead of the crashed component</li>
          <li>Error boundaries work like a JavaScript catch block, but for components</li>
          <li>They only catch errors in the components below them in the tree</li>
          <li>They don&apos;t catch errors in event handlers, async code, or server-side rendering</li>
        </ul>
      </div>
    </div>
  );
}
