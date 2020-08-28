var root = document.location.origin;
var router = new Navigo(root);

// when no route specified it assumes the base route: "/"
router.on(window.handleHomeRequest).resolve();
router.on("/home" ,window.handleHomeRequest).resolve();
router.on("/meals", window.handleMealsRequest).resolve();
router.on("/meal/:id", window.handleMealRequest).resolve();
router.on("/new-meal", window.handelNewMeal).resolve();
router.on("/review/:id", window.handelReview).resolve();
router.on("/meal/:id/reviews", window.handleShowMealReviews).resolve();



