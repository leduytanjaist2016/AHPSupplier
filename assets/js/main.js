/**
* Template Name: iPortfolio - v3.3.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */


  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });



})()
 /**
   * Add by Tan
   */
    function Add_Attribute(){
      document.getElementById("button_no_attribute").disabled = 'true';
      var no_attibute = document.getElementById('no_attribute').value;
      var i = 0;
      document.getElementById("attribute-list").innerHTML +=
          "<form id = 'attribute-list-form'> ";
       while (i < no_attibute)
            {
                  document.getElementById("attribute-list").innerHTML +=
                    "<label for=\"fname\"> Attribute " + (i+1).toString()+ " " + "</label>\n" +
                      "  <input type=\"text\" id= " +
                      "\"attribute-list-"+ i.toString() +
                      "\"name=\"fname\" ><br>";
                  i++;
            }
            document.getElementById("attribute-list").innerHTML += "<input type='button' value='Submit' onclick='Add_Attribute_Score()'> </form>";

          };

    function print_form(attribute_list, table_id)
          {
            var tableString = "<table id='"+table_id+"'>";
            for(let i = 0; i <= attribute_list.length; i++) {
              tableString += "<tr>";
              for (let j = 0; j <= attribute_list.length; j++)
              {
                if(i==0 && j == 0){
                  console.log("i 0 j0");
                  tableString +=
                       "<th > Attribute </th>";
                }
                else if(i!==0 && j==0){
                  console.log("i 0 j1");
                 tableString +=
                      "<th> " + attribute_list[i-1] + "</th>";
                } else if(i==0 && j!==0){
                  console.log("i!=0 j!=0");
                  tableString +=
                      "<th>" + attribute_list[j-1]+  "</th>";
                } else
                {
                  input_id = table_id + "_"+(i-1).toString()+"_"+ (j-1).toString();
                  tableString +=
                      "<td> " +
                      "<input type=\"number\" onkeyup=\"Input_Maxtrix_Value(this.id)\" id= " + input_id +"\>" +
                      "</td> ";
                }

              }
              tableString += "</tr>";

            }
            tableString += "</table>";
            document.getElementById("attribute-score").innerHTML += tableString;
          };
    function Add_Attribute_Score()
    {
      var attribute_list_array =[];
      for (let i = 0; i<document.getElementById('no_attribute').value; i++) {
        attribute_list_array.push(document.getElementById('attribute-list-'+i.toString()).value);
      }
      console.log(attribute_list_array[0]);
      console.log(attribute_list_array[1]);
      //print_form(attribute_list_array);
      print_form(attribute_list_array, "Add_Attribute_Score_Table");
      tableString ="";
      tableString += "<input type='button' value='Submit'"+
                "onclick = \"Cal_Priority_Vector()\"" +
          "data_size = \"no_attribute\" data_id = \"Add_Attribute_Score_Table\" output_id = \"priority-vector_of_attribute\"" +
          ">";
      document.getElementById("attribute-score").innerHTML += tableString;
      upper_matrix(attribute_list_array.length, "Add_Attribute_Score_Table");
    };
    // Method to form upper
    // triangular matrix
    function upper_matrix(size, input_id)
    {
      console.log(size);
        let i, j;
        for (i = 0; i < size; i++)
        {
            for (j = 0; j < size; j++)
            {
              use_id = input_id + "_"+(i).toString()+"_"+ (j).toString();
                if (i > j)
                {
                  document.getElementById(use_id).disabled = true;
                }
                else if (i==j) {
                  document.getElementById(use_id).value = 1;
                  document.getElementById(use_id).disabled = true;
                }
            }
        }
    };
    function Input_Maxtrix_Value(id)
    {
      console.log(id);
      //var value = document.getElementById(id).value;
      id_array = id.split("_");
      var id_new = "";
      for(i = 0; i< id_array.length-2; i++)
      {
        id_new += id_array[i] + "_";
      }
      id_new += id_array[id_array.length-1]+"_"+ id_array[id_array.length-2];
      if(document.getElementById(id).value>0)
        document.getElementById(id_new).value = (1/document.getElementById(id).value).toFixed(4);
    };



    // To creat javascript matrix
  function Get_Matrix_Values(size, id)
    {
      var this_array = Create2DArray(size);
      for (var j = 0; j < size; j++) {
          for (var i = 0; i < size; i++) {
              this_array[i][j] = Number(document.getElementById(id + "_"+(j).toString()+"_"+ (i).toString()).value);
          }
      }
      return this_array;
    };
    function Cal_Priority_Vector()
    {
      let data_size = event.target.getAttribute('data_size');
      let id = event.target.getAttribute('data_id');
      let output_id = event.target.getAttribute('output_id');
      let size = document.getElementById(data_size).value;
      let this_array = Get_Matrix_Values(size, id);
      var normalized_array = Create2DArray(size);
       for (var i = 0; i < size; i++) {
         for (var j = 0; j < size; j++) {
           normalized_array[j][i] = Number((this_array[i][j]/ this_array[i].reduce((v, k) => (v + k))).toFixed(2));
         }
       }
       console.table(normalized_array);
      //document.getElementById(id).innerHTML += myString;
      var priority_vector = [];
      for (var i = 0; i < size; i++) {
        priority_vector.push(Number((normalized_array[i].reduce((v, k) => (v + k))/size).toFixed(2)));
      }
      //console.table(this_array);
      //console.table(priority_vector);
      //console.table(multiplyMatrices(this_array,priority_vector));
      Ax = multiplyMatrices(this_array,priority_vector);
      var sum_Axx = 0;
      for (var i = 0; i< size; i++)
      {
        sum_Axx += Ax[i]/priority_vector[i];
      }
      lamda = Number((sum_Axx/size).toFixed(2));
      //lamda = (multiplyMatrices(this_array,priority_vector).reduce((v, k) => (v + k))/size;

      consistency_index = Number(((lamda - size)/(size-1)).toFixed(2));
      console.log(lamda);
      console.log(consistency_index);
      consistency_ratio = Number((consistency_index/random_index(size)).toFixed(2));
      tableString = "<p> Priority Vector: " + priority_vector.toString() + " </p>";
      tableString += "<p> Lamda: " + lamda.toString() + " </p>";
      tableString += "<p> Consistency Index: " + consistency_index.toString() + " </p>";
      tableString += "<p> Consistency Ratio: " + consistency_ratio.toString() + " </p>";
      if (size < 3)
      {
        tableString += "<p> The evaluations are consistent since size < 3 </p>";
      } else if(consistency_ratio<=0.1)
        tableString += "<p> The evaluations are consistent </p>";
      else
        tableString += "<p> The evaluations are not consistent </p>";
      document.getElementById(output_id).innerHTML += tableString;

      return consistency_index;
    };
    function Create2DArray(rows) {
              var arr = [];

              for (var i=0;i<rows;i++) {
                 arr[i] = [];
              }

              return arr;
            };
    //multiply Matrices
      function multiplyMatrices(input1, input2) {
          var result = [];
          for (var j = 0; j < input1.length; j++) {
            var sum = 0;
              for (var i = 0; i < input1.length; i++) {
                  console.log(input1[i][j].toString()+" + "+input2[i].toString());
                  sum += input1[i][j] * input2[i];
                  }
                  result.push(Number(sum.toFixed(2)));
              }
          return result;
      };
      function random_index(size)
      {
        switch(Number(size)) {
          case 3:
          r_index = 0.58;
          break;
          case 4:
          r_index = 0.90;
          break;
          case 5:
          r_index = 1.12;
          break;
          case 6:
          r_index = 1.24;
          break;
          case 7:
          r_index = 1.32;
          break;
          case 8:
          r_index = 1.41;
          break;
          case 9:
          r_index = 1.45;
          break;
          case 10:
          r_index = 1.49;
          break;
          case 11:
          r_index = 1.51;
          break;
          case 12:
          r_index = 1.48;
          break;
          case 13:
          r_index = 1.56;
          break;
          case 14:
          r_index = 1.57;
          break;
          case 15:
          r_index = 1.59;
          break;
        default:
          r_index = 1;
}
return r_index;

      }
