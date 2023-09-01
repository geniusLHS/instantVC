interface lProps {
  color: string;
  name: string;
  voice: number;
}

function Profile({ color, name, voice }: lProps) {
  let voice2color = (voice: number) => {
    switch (voice) {
      case 1:
        return '#00B050';
      case 0:
        return '#D0CECE';
      case -1:
        return '#FF4747';
    }
  };

  return (
    <div className="flex flex-col items-center gap-1 rounded-md p-3">
      <div className="h-24 w-24 rounded-full" style={{ backgroundColor: color }}></div>
      <div className="text-center text-xl">{name}</div>
      <div className="h-3 w-16 rounded-full" style={{ backgroundColor: voice2color(voice) }}></div>
    </div>
  );
}

export default Profile;
