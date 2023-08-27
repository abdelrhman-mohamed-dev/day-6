const ProgressBar = ({ progressPercentage, progressName }) => {
  return (
    <div className="flex">
      <h1 className="text-white text-center font-semibold w-28 p-3 bg-zinc-900">
        {progressName}
      </h1>
      <div className="w-full h-12 bg-slate-200 relative">
        <div
          className="absolute h-12 bg-zinc-600"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};
export default ProgressBar;
