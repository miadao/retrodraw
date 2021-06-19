//MOdule 1

function makePalette() { 

     const PALETTE =[
        'red',
        'blue',
        'green',
        'brown',
        'orange',
        'white',
        'pink',
        'yellow',
    ]

    for (let index = 0; index < PALETTE.length; index = index + 1) {
  
    const nextColor = PALETTE[index]
        const btn = $('<button>');
        btn.css('background-color', nextColor);

        $('.palette').append(btn);
 
    }

    $('.palette button').first().addClass('active');
}

makePalette();



//Module 2

function makeGrid () {

    const gridElement = $('.grid');

    for(let i = 0; i < 64; i++){

        const div = $('<div>');
        div.addClass('cell');
        gridElement.append(div);

    }
}

makeGrid();




function onPaletteClick (){
        
        $('.palette .active').removeClass('active');
        $(this).addClass('active');
    }

$('.palette button').click(onPaletteClick)



function onGridClick() {
    let buttonColor = $('.palette .active').css('background-color');
    let cellColor = $(this).css('background-color');
    
    if (cellColor === buttonColor) {
    
      $(this).css('background-color', '');
    } else {
    
      $(this).css('background-color', buttonColor);
    }
  }
  $('.grid .cell').click(onGridClick);



  
//Module 3
function onClearClick() {
    $('.grid .cell').css('backgroundColor', '');
  }
  
  $('.controls .clear').click(onClearClick);

  
  

  function onFillAllClick() {
    let buttonColor = $('.palette .active').css('backgroundColor');
    $('.cell').css('backgroundColor', buttonColor);
  }
  
  $('.fill-all').click(onFillAllClick)


// .controls section 


  
  function onFillEmptyClick() {
    let buttonColor = $('.palette .active').css('backgroundColor');
    let elements = $('.cell');
  
    for (let index = 0; index < elements.length; index = index + 1) {
      let nextElement = $(elements[index]);
  
      console.log($(nextElement).css('background-color'))
  
      if ($(nextElement).css('backgroundColor') == 'rgba(0, 0, 0, 0)') {
        $(nextElement).css('backgroundColor', buttonColor);
      }
    }
  }
  
  $('.fill-empty').click(onFillEmptyClick);