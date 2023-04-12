import News from "../models/News.js";

const createService = (body) => News.create(body);

const findAllService = (offset, limit) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countNews = () => News.countDocuments();

const topNewsService = () => News.findOne().sort({ _id: -1 }).populate("user");

const findByIdService = (id) => News.findById(id).populate("user");

const serachByTitleService = (title) =>
  News.find({
    title: { $regex: `${title || " "}`, $options: "i" },
  })
    .sort({ _id: -1 })
    .populate("user");

const byUserService = (id) =>
  News.find({ user: id }).sort({ _id: -1 }).populate("user");

const updateService = (id, title, text, banner) =>
  News.findOneAndUpdate(
    { _id: id },
    { title, text, banner },
    { rawResult: true }
  );

const eraseService = (id) => News.findByIdAndDelete({ _id: id });

const likeNewsService = (idNews, userId) =>
  News.findOneAndUpdate(
    { _id: idNews, "likes.userId": { $nin: [userId] } },
    { $push: { likes: { userId, created: new Date() } } }
  );

const deleteLikeNewsService = (idNews, userId) =>
  News.findOneAndUpdate({ _id: idNews }, { $pull: { likes: { userId } } });

export {
  createService,
  findAllService,
  countNews,
  topNewsService,
  findByIdService,
  serachByTitleService,
  byUserService,
  updateService,
  eraseService,
  likeNewsService,
  deleteLikeNewsService,
};
