import { IParticipant } from '../IParticipant';

export function InputLoader({
  onInputLoaded,
}: {
  onInputLoaded: (participants: IParticipant[]) => void;
}) {
  const mapToParticipantList = (fileContent: string) => {
    const rows = fileContent.split('\r\n');
    const keys = rows[0].split(',');
    return rows
      .filter((item: string, index: number) => index > 0 && item !== '')
      .map((row) => {
        const values = row.split(',');
        return keys.reduce((entry, key, i) => {
          entry[key] = values[i];
          return entry;
        }, {} as any);
      });
  };
  const dropHandler = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();

    if (ev.dataTransfer.items && ev.dataTransfer.items[0]) {
      ev.dataTransfer.items[0]
        .getAsFile()
        ?.text()
        .then((data) => {
          onInputLoaded(mapToParticipantList(data) as IParticipant[]);
        });
    } else if (ev.dataTransfer.files && ev.dataTransfer.files[0]) {
      ev.dataTransfer.files[0].text().then((data) => {
        mapToParticipantList(data);
      });
    }
  };
  const dragOverHandler = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  return (
    <div id="drop_zone" onDrop={dropHandler} onDragOver={dragOverHandler}>
      <p>Drag a .csv file with the participants list here</p>
    </div>
  );
}
