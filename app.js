const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.swiper-wrapper',
//     start: '0%',
//     end: '100%',
//   },
// });

// // const tl=gsap.timeline({defaults:{duration:2,ease:"power1.out"}})

// tl.fromTo(
//   '.one',
//   { background: '#666' },
//   { background: '#ce111e', ease: 'elastic.out(1,0.4)', duration: 0.5 }
// );
// tl.fromTo(
//   '#shop',
//   { scale: 0 },
//   { scale: 1, ease: 'elastic.out(1,0.4)', duration: 1 }
// );

// tl.fromTo(
//   '.two',
//   { background: '#666' },
//   { background: '#ce111e', ease: 'elastic.out(1,0.4)', duration: 0.5 }
// );

// tl.to('#boxs', 0.5, { y: -20, ease: Cubic.easeOut });
// tl.fromTo(
//   '#boxs',
//   { scale: 1 },
//   { scale: 0, ease: 'elastic.out(1,0.4)', duration: 0.5 }
// );
// tl.fromTo(
//   '#twotwo',
//   { opacity: 0 },
//   { opacity: 1, ease: 'elastic.out(1,0.4)', duration: 0.5 }
// );

// tl.fromTo(
//   '.three',
//   { background: '#666' },
//   { background: '#ce111e', ease: 'elastic.out(1,0.4)', duration: 0.5 }
// );

// tl.fromTo(
//   '#not',
//   { scale: 0 },
//   { scale: 1, ease: 'elastic.out(1,0.4)', duration: 1 }
// );

// tl.fromTo(
//   '.four',
//   { background: '#666' },
//   { background: '#ce111e', ease: 'elastic.out(1,0.4)', duration: 0.5 }
// );

// tl.to('#bo', 1, { x: -50, y: 20, ease: Cubic.easeOut });

// swiper



window.addEventListener('scroll',(e)=>{
  const nav = document.querySelector('nav');
  if(window.pageYOffset>0){
    nav.classList.add("shadow-sm");
  }else{
    nav.classList.remove("shadow-sm");
  }
});
// window.addEventListener('scroll',(e)=>{
//   const nav = document.querySelector('.message-product ');
//   if(window.pageYOffset>0){
//     nav.classList.remove("d-none");
//   }else{
 
// 		nav.classList.add("d-none");
//   }
// });


  

let searchIndex = [
	{
		title: "Locktec",
		url: "https://www.locktec.com/produkte/cool-lockers/",
    summary: "A short summary or preview of the content (can also be a clipped version of the first few sentences)..."

	},
	{
		title: "Locktec",
		url: "https://www.locktec.com/produkte/cool-lockers/",
    summary: "A short summary or preview of the content ..."

	},
	{
		title: "Locktec",
		url: "https://www.locktec.com/produkte/cool-lockers/",
    summary: "A "

	},
	{
		title: "servicebox",
		url: "https://www.locktec.com/produkte/cool-lockers/",
		summary: "A "

	},
	{
		title: "contect",
		url: "https://www.locktec.com/produkte/cool-lockers/",
		summary: "A "

	},

	// More content...
];

(function (window, document, undefined) {

	'use strict';

	//
	// Variables
	//

	let form = document.querySelector('#form-search');
	let input = document.querySelector('#input-search');
	let resultList = document.querySelector('#search-results');




	//
	// Methods
	//

	/**
	 * Create the HTML for each result
	 * @param  {Object} article The article
	 * @param  {Number} id      The result index
	 * @return {String}         The markup
	 */
	let createHTML = function (article, id) {
		let html =
			'<div class="" id="search-result-' + id + '">' +
				'<a class="nav-link s p-1" href="' + article.url + '">' +
				
					'<h6 class="fw-bold ">'  + article.title + ' ' +'<i class="bi bi-box-arrow-up-right"></i>' + '</h6>' +
          '<small class="lead">' +article.summary  +'</small>'
				
				'</a>' +
			
			'</div>';
		return html;
	};

	/**
	 * Create the markup when no results are found
	 * @return {String} The markup
	 */
	let createNoResultsHTML = function () {
		return '<p>Sorry, no matches were found.</p>';
	};

	/**
	 * Create the markup for results
	 * @param  {Array} results The results to display
	 * @return {String}        The results HTML
	 */
	let createResultsHTML = function (results) {
		let html = '<p>Found ' + results.length + ' matching </p>';
		html += results.map(function (article, index) {
			return createHTML(article, index);
		}).join('');
		return html;
	};

	/**
	 * Search for matches
	 * @param  {String} query The term to search for
	 */
	let search = function (query) {

		// Variables
		let reg = new RegExp(query, 'gi');
		let priority1 = [];
		let priority2 = [];
	

		// Search the content
		searchIndex.forEach(function (article) {
			if (reg.test(article.title)) return priority1.push(article);
			if (reg.test(article.title)) priority2.push(article);
			
		});

		// Combine the results into a single array
		let results = [].concat(priority1, priority2);

		// Display the results
		resultList.innerHTML = results.length < 1 ? createNoResultsHTML() : createResultsHTML(results);

	};

	/**
	 * Handle submit events
	 */
	let submitHandler = function (event) {
		event.preventDefault();
		search(input.value);
	};


	//
	// Inits & Event Listeners
	//

	// Make sure required content exists
	if (!form || !input || !resultList || !searchIndex ) return;

	// Create a submit handler
	form.addEventListener('keyup', submitHandler);


})(window, document);


var owl = $('.owl-carousel');
owl.owlCarousel({

    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
		nav: true
});


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});




