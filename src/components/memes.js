import { sub } from "date-fns";

export const MEMES = [
  {
    title: "Mem 1",
    upvotes: 4,
    downvotes: 0,
    img: "/img/img1.png",
    date: sub(new Date(), { minutes: 0 }).toISOString(),
    favourite: false,
  },
  {
    title: "Mem 2",
    upvotes: 1,
    downvotes: 2,
    img: "/img/img2.jpg",
    date: sub(new Date(), { minutes: 0 }).toISOString(),
    favourite: true,
  },
  {
    title: "Mem 3",
    upvotes: 0,
    downvotes: 0,
    img: "/img/img3.png",
    date: sub(new Date(), { minutes: 0 }).toISOString(),
    favourite: false,
  },
  {
    title: "Mem 4",
    upvotes: 0,
    downvotes: 0,
    img: "/img/img4.png",
    date: sub(new Date(), { minutes: 0 }).toISOString(),
    favourite: false,
  },
];
