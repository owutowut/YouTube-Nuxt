let idCounter = 0;
const generateId = () => idCounter++;

export const tag = [
  {
    id: generateId(),
    message: "ทั้งหมด",
  },
  {
    id: generateId(),
    message: "เพลง",
  },
  {
    id: generateId(),
    message: "เกม",
  },
  {
    id: generateId(),
    message: "ไลฟ์สด",
  },
  {
    id: generateId(),
    message: "ข่าวสาร",
  },
  {
    id: generateId(),
    message: "มิกซ์",
  },
];
