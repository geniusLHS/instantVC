interface lProps {
  name: string;
}

function StatusSettingArea({ name }: lProps) {
  return (
    <div className="mt-8 flex flex-row items-center gap-1 rounded-2xl bg-[#ececec] p-2 text-lg">
      <div className="px-3 py-2 text-center text-xl font-bold">{name}</div>
      <div className="cursor-pointer rounded-lg px-2 py-2 transition hover:bg-[#d7d7d7]">🎤</div>
      <div className="cursor-pointer rounded-lg px-2 py-2 transition hover:bg-[#d7d7d7]">🎧</div>
      <div className="cursor-pointer rounded-lg px-2 py-2 transition hover:bg-[#d7d7d7]">🤔</div>
    </div>
  );
}

export default StatusSettingArea;
