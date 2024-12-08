const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-700 dark:text-gray-400">
          'An unexpected error has occurred. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
