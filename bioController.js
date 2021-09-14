Bio = require('./bioModel');

exports.index = function (req, res) {
    Bio.get(function (err, bio) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Bio Successfully!",
            data: bio       
        });
    });
};

exports.add = function (req, res) {
    var bio = new Bio();
    bio.StudentName = req.body.StudentName? req.body.StudentName: bio.StudentName;
    bio.RollNo = req.body.RollNo? req.body.RollNo: bio.RollNo;
    bio.Email = req.body.Email;
    bio.Phone = req.body.Phone;
    bio.Mark1= req.body.Mark1;
    bio.Mark2 = req.body.Mark2;
    bio.Mark3 = req.body.Mark3;
    bio.Total=(bio.Mark1-0)+(bio.Mark2-0)+(bio.Mark3-0);
    bio.Average=bio.Total/3;
    


    bio.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "New Bio Added!",
            data: bio
        });
    });
};

// View Bio
exports.view = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        res.json({
            message: 'Bio Details',
            data: bio
        });
    });
};

// Update Bio
exports.update = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        bio.StudentName = req.body.StudentName ? req.body.StudentName : bio.StudentName;
        bio.RollNo = req.body.RollNo ? req.body.RollNo : bio.RollNo;
        bio.Email = req.body.Email;
        bio.Phone = req.body.Phone;
        bio.Mark1 = req.body.Mark1;
        bio.Mark2 = req.body.Mark2;
        bio.Mark3 = req.body.Mark3;
        bio.Total=(bio.Mark1-0)+(bio.Mark2-0)+(bio.Mark3-0);
        bio.Average=bio.Total/3;
    

        //save and check errors
        bio.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Bio Updated Successfully",
                data: bio
            });
        });
    });
};

// Delete Bio
exports.delete = function (req, res) {
    Bio.deleteOne({
        _id: req.params.bio_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Bio Deleted'
        });
    });
};