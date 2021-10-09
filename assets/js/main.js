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
      var no_supplier = document.getElementById('no_supplier').value;

      var i = 0;
      var j = 0;
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
            //document.getElementById("attribute-list").innerHTML += "<input type='button' value='Submit' onclick='Add_Attribute_Score()'> </form>";

       document.getElementById("supplier-list").innerHTML +=
          "<br><form id = 'supplier-list-form'> ";
       while (j < no_supplier)
            {
                  document.getElementById("supplier-list").innerHTML +=
                    "<label for=\"fname\"> Supplier " + (j+1).toString()+ " " + "</label>\n" +
                      "  <input type=\"text\" id= " +
                      "\"supplier-list-"+ j.toString() +
                      "\"name=\"fname\" ><br>";
                  j++;
            }
            document.getElementById("supplier-list").innerHTML += "<br><input type='button' value='Submit' class='button-74' onclick='Add_Attribute_Score()'" +
                "data_size = \"no_attribute\" data_id = \"Add_Attribute_Score_Table\" output_id = \"priority-vector_of_attribute\"" +
                "> </form><br> ";


          };

    function print_form(attribute_list, table_id, div_id, title)
          {
            var tableString = "<table id='"+table_id+"'>";
            for(let i = 0; i <= attribute_list.length; i++) {
              tableString += "<tr>";
              for (let j = 0; j <= attribute_list.length; j++)
              {
                if(i==0 && j == 0){

                  tableString += "<th >" + title+  "</th>";
                }
                else if(i!==0 && j==0){

                 tableString +=
                      "<th> " + attribute_list[i-1] + "</th>";
                } else if(i==0 && j!==0){

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
            document.getElementById(div_id).innerHTML += tableString;
          };
    function Add_Attribute_Score()
    {
      var attribute_list_array =[];
      for (let i = 0; i<document.getElementById('no_attribute').value; i++) {
        attribute_list_array.push(document.getElementById('attribute-list-'+i.toString()).value);
      }

      print_form(attribute_list_array, "Add_Attribute_Score_Table", "attribute-score", "Attribute");
      tableString ="";
      tableString += "<input type='button' class='button-74' value='Submit'"+
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
                  console.log("i==j");
                  console.log(use_id);
                  document.getElementById(use_id).value = 1;
                  //document.getElementById(use_id).disabled = true;
                }
            }
        }
        i = 0;
        j = 0;
    };
    function Input_Maxtrix_Value(id)
    {

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

      var priority_vector = [];
      for (var i = 0; i < size; i++) {
        priority_vector.push(Number((normalized_array[i].reduce((v, k) => (v + k))/size).toFixed(2)));
      }
      console.log("This Array");
      console.log(this_array);
      console.log("Prio");
      console.log(priority_vector);
      Ax = multiplyMatrices(this_array,priority_vector);
      var sum_Axx = 0;
      for (var i = 0; i< size; i++)
      {
        sum_Axx += Ax[i]/priority_vector[i];
      }
      lamda = Number((sum_Axx/size).toFixed(2));
      //lamda = (multiplyMatrices(this_array,priority_vector).reduce((v, k) => (v + k))/size;

      consistency_index = Number(((lamda - size)/(size-1)).toFixed(2));
      consistency_ratio = Number((consistency_index/random_index(size)).toFixed(2));
      tableString = "<p> <br> Priority Vector: " + priority_vector.toString().split(",").join(", ") + " </p>";
      tableString += "<p> Lamda: " + lamda.toString() + " </p>";
      tableString += "<p> Consistency Index: " + consistency_index.toString() + " </p>";
      tableString += "<p> Consistency Ratio: " + consistency_ratio.toString() + " </p>";
      if (size < 3)
      {
        tableString += "<p> The evaluations are consistent since size < 3 </p>";
        document.getElementById("alternative-tables").style.display = 'inline';
        document.getElementById("id_result").innerHTML += priority_vector.toString()+";";
      } else if(consistency_ratio<=0.1) {
        tableString += "<p> The evaluations are consistent </p>";
        document.getElementById("alternative-tables").style.display = 'inline';
        document.getElementById("id_result").innerHTML += priority_vector.toString()+";";
      }
      else
        tableString += "<p> The evaluations are not consistent </p>";
      document.getElementById(output_id).innerHTML += tableString;

      return priority_vector;
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

      };
      function CreateAlternativeTable(){
      };

      // To generate Supplier Tables
      function Add_Supplier_Score(attribute_list)
    {
      var table_id = attribute_list.toString().split(' ').join('_') + "_Add_Supplier_Score_Table";
      var supplier_list_array =[];
      for (let i = 0; i<document.getElementById('no_supplier').value; i++) {
        var myid = 'supplier-list-'+i.toString();
        supplier_list_array.push(document.getElementById(myid).value);
      }
      //print_form(attribute_list_array);
      print_form(supplier_list_array, table_id, "supplier_div", attribute_list);
      tableString ="";
      tableString += "<input type='button' class='button-74' value='Submit'"+
                "onclick = \"Cal_Priority_Vector()\"" +
          "data_size = \"no_supplier\" data_id = \""+ table_id +"\" output_id = \"" + "div_" + table_id +"\"" +
          ">";
      tableString += "<div id=\"div_" + table_id +"\"></div>";
      document.getElementById("supplier_div").innerHTML += tableString;
      upper_matrix(supplier_list_array.length, table_id);
    };

       function Add_Supplier_Form(){
          for (let i = 0; i<document.getElementById('no_attribute').value; i++) {
            var myid = "attribute-list-"+i.toString();
            Add_Supplier_Score(document.getElementById(myid).value);
      }
          document.getElementById("btn_result").style.display = 'inline';

       };
       function Cal_Final_Result()
       {
         var ranking_of_alternatives = document.getElementById('id_result').innerHTML.split(";");
         var size = document.getElementById("no_supplier").value;
         let priority_matrix = []; // Priority Matrix
         let criteria_weights_temp = []; // Criteria Weights
         let criteria_weights = [];
         let winner_matrix = [];
         for (let i = 0; i < ranking_of_alternatives.length-1; i++)
         {
           if(i==0)
             criteria_weights_temp = (ranking_of_alternatives[i].split(",")).map(Number);
           else
           {
             console.log(ranking_of_alternatives[i].split(","));
             priority_matrix.push((ranking_of_alternatives[i].split(",")).map(Number));
           }
         }
         for (let i = 0; i<criteria_weights_temp.length; i++)
           criteria_weights.push(criteria_weights_temp[i]);
         //var transpose_array = Transpose(priority_matrix);
         console.log("criteria_weights");
         console.log(criteria_weights);
         console.log("priority_matrix");
         console.log(priority_matrix);
         winner_matrix.push(multiplyMatrices_final_array(priority_matrix, criteria_weights));
         console.log("Winner");
         console.log(winner_matrix);
         var winner_value = winner_matrix[indexOfMax(winner_matrix)];
         console.log("winner_value");
         console.log (winner_value);
         var winner_supplier_id = "supplier-list-" + indexOfMax(winner_matrix);
         var winner_supplier =  document.getElementById(winner_supplier_id).value;
         console.log("winner_supplier");
         console.log (winner_supplier);
         document.getElementById("final_result").innerHTML += "Winner Array: " + winner_matrix.toString().split(",").join(", ") + "<br>";
         document.getElementById("final_result").innerHTML += "Max Winner Array Index: " + (indexOfMax(winner_matrix)).toString() +"<br>";
         document.getElementById("final_result").innerHTML += "The Winner is: " + winner_supplier.toString() +"<br>";
       };

       // Transpose Array
       function Transpose(array) {
              return Object.keys(array[0]).map(function(c) {
          return array.map(function(r) { return r[c]; });
       });
        }
        // Return index of Max
function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
};
             function multiplyMatrices_final_array(input1, input2) {
          var result = [];
          for (var j = 0; j < input1[0].length; j++) {
            var sum = 0;
              for (var i = 0; i < input1.length; i++) {
                  sum += input1[i][j] * input2[i];
                  }
                  result.push(Number(sum.toFixed(2)));
              }
          return result;
      };


