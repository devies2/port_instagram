    $(function () {
        $(".pick").on('change', function () {
            readURL(this);
        });
    });

    var i = 0;

    function readURL(input) {
        if (input.files && input.files[i]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.item'+(i+1)).attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[i]);
        }
    }
    var abc = document.querySelector('.pick');
    console.log(abc.files);


var newF =  $('#newF').val();
var formData = new FormData($('#fileForm')[0]);

console.log(newF);
console.log(formData);