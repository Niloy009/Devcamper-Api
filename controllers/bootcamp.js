// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc      Get single Bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show the bootcamp ${req.params.id}` });
};

// @desc      Create Bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' });
};

// @desc      Get single Bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update the bootcamp ${req.params.id}` });
};

// @desc      Get single Bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete the bootcamp ${req.params.id}` });
};
