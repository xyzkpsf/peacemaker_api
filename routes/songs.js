import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.params.name;
  // do some sanity check here to parse the name
});

router.get("/:id", (req, res) => {
  const id = req.query.id;
  // search db and return that
});

router.get("/episode/:episode", (req, res) => {
  const id = req.query.episode;
  // search db and return that
});

router.get("/random", (req, res) => {
  // get all characters length
  // generate a random integer
  // call and return
  // search db and return that
});

const getSongById = async (id) => {
  // db.findById(id).then
};

export default router;
