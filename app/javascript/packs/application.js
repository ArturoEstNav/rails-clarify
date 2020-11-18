// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// responsive sources

// <script src="node_modules/lodash/lodash.js"                   type="text/javascript"></script>;
// <script src="node_modules/cloudinary-core/cloudinary-core.js" type="text/javascript"></script>

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

import "cloudinary";
import "cloudinary-core";
import "cloudinary-jquery";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { initMapbox } from './map';

document.addEventListener('turbolinks:load', () => {
  initMapbox();
});

// Responsive config
  const cl = cloudinary.Cloudinary.new({cloud_name: "dknmmwaff"});
  cl.responsive();


