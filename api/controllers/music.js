const Music = require('../models/music');

exports.index = async (req, res, next) => {
  try {
    const music = await Music.find();

    res.status(200).json(music);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const music = await Music.findById(req.params.id);
    res.status(200).json(music);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  console.log(req.body);

  try {
    const { title, artist, genre } = req.body;

    const ms = await Music.create({
      artist,
      title,
      genre
    });

    res.status(200).json({ message: "Music was created successfully", music: ms });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { _id, title, artist, genre } = req.body;
    const ms = await Music.findOneAndUpdate({ _id }, {
      title,
      artist,
      genre,
    });
    res.status(200).json({message: 'Music was updated successfully', status: 'success', music: ms});
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Music.findOneAndDelete({ _id });
    res.status(200).json({message: 'Music was deleted successfully', status: 'success'});
  } catch (error) {
    next(error);
  }
};