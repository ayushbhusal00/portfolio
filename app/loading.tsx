export default function RootLoading() {
  return (
    <section className='min-h-[50vh] w-full flex items-center justify-center'>
      <div className='flex flex-col items-center gap-3 text-gray-600 dark:text-gray-300'>
        <span className='h-8 w-8 rounded-full border-2 border-gray-300 border-t-gray-600 dark:border-gray-700 dark:border-t-white animate-spin' />
        <p className='text-sm'>Loading…</p>
      </div>
    </section>
  );
}
