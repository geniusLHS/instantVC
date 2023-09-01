import Profile from './Profile';

let Participants = [
  { color: '#7f7f7f', name: 'elephant', voice: 1 },
  { color: '#ffffff', name: '올빼미', voice: -1 },
  { color: '#7f7f7f', name: 'stein', voice: 0 },
  { color: '#ffffff', name: 'keyboard', voice: 1 },
  { color: '#7f7f7f', name: '마우스', voice: 0 },
];

function ParticipantProfiles() {
  return (
    <div className="m-8 flex flex-row gap-7 rounded-3xl bg-[#ececec] p-5">
      {Participants.map((item) => (
        <Profile color={item.color} name={item.name} voice={item.voice}></Profile>
      ))}
    </div>
  );
}

export default ParticipantProfiles;
