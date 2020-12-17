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
}

exports.create = async (req, res, next) => {
  try {
    const { title, artist, genre } = req.body;

    const qt = await Music.create({
      artist,
      title,
      genre
    });

    res.status(200).json({ message: "Music was created successfully", music: qt });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
};

exports.destroy = async (req, res, next) => {
};