var express = require('express');
var router = express.Router();
var categoryDao = require('../dao/categoryDao')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});



// 增加用户
//TODO 同时支持get,post


router.get('/queryAllRootCategory', function(req, res, next) {
    categoryDao.queryAllRootCategory(req, res, next);
});

router.get('/queryCategoryByName',function(req,res,next){
    categoryDao.queryCategoryByName(req,res,next);
});
router.get('/queryAllSubCategory', function(req, res, next) {
    categoryDao.queryAllSubCategory(req, res, next);
});

router.get('/queryAllCategories',function(req,res,next){
    categoryDao.queryAllCategories(req,res,next);
});
router.get('/queryCategoriesSalesWithDate',function(req,res,next){
    categoryDao.queryCategoriesSalesWithDate(req,res,next);
});
router.get('/queryCategoriesProductSalesWithDate',function(req,res,next){
    categoryDao.queryCategoriesProductSalesWithDate(req,res,next);
});


/////////////////////////////
router.get('/queryProductLastMonth',function(req,res,next){
    categoryDao.queryCategoriesProductSalesLastMonth(req,res,next);
});
router.get('/queryProductThisMonth',function(req,res,next){
    categoryDao.queryCategoriesProductSalesThisMonth(req,res,next);
});
router.get('/queryProductToday',function(req,res,next){
    categoryDao.queryProductToday(req,res,next);
});
router.get('/queryProductYesterday',function(req,res,next){
    categoryDao.queryProductYesterday(req,res,next);
});

/////////////////////////////
router.get('/queryCategoryLastMonth',function(req,res,next){
    categoryDao.queryCategoriesSalesLastMonth(req,res,next);
});
router.get('/queryCategoryThisMonth',function(req,res,next){
    categoryDao.queryCategoriesSalesThisMonth(req,res,next);
});
router.get('/queryCategoryToday',function(req,res,next){
    categoryDao.queryCategoriesProductToday(req,res,next);
});
router.get('/queryCategoryYesterday',function(req,res,next){
    categoryDao.queryCategoriesProductYesterday(req,res,next);
});
///////////////////////////////
router.get('/queryTaxes',function(req,res,next){
    categoryDao.queryTaxes(req,res,next);
});
module.exports = router;
