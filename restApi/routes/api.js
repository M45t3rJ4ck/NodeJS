const express = require("express");

const router = express.Router();

const Member = require("../models/member")

router.get("/members", function(req, res, next){
  Member.aggregate([
    {
      $geoNear: {
        near: {type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        distanceField: "dist.calculated",
        maxDistance: 100000,
        spherical: true
      }
    }
  ]).then(function(members){
      res.send(members);
    }).catch(next);
});

router.post("/member", function(req, res, next){
  Member.create(req.body).then(function(member){
    res.send(member);
  }).catch(next);
});

router.put("/member/:id", function(req, res, next){
  Member.findOneAndUpdate(req.params.id, req.body, {new: true}).then(function(member){
    res.send(member);
  }).catch(next);
});

router.delete("/member/:id", function(req, res, next){
  Member.findOneAndDelete(req.params.id).then(function(member){
    res.send(member);
  }).catch(next);
});

module.exports = router;
