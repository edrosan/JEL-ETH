function Surveys() {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
          <a
            href="/"
            className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
            aria-current="page"
          >
            Dashboard
          </a>
        </li>
      </ul>
    </div>
  );
}

function Survey () {
  return (
    <div className="w-[1200px] mx-auto flex flex-col gap-4">
      <Surveys />
    </div>

  )
}

function Vote() {
  return (
    <div className="w-[1200px] mx-auto flex flex-col gap-4">
      {/* <Surveys /> */}
    </div>
  );
}

export { Vote };
