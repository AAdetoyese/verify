
                function myFunction() {
                  var x = document.getElementById("OTP");
                  if (x.type === "password") {
                    x.type = "text";
                  } else {
                    x.type = "password";
                  }
                }
               
                var input = document.getElementById("OTP");
                var text = document.getElementById("text");
                input.addEventListener("keyup", function(event) {
                
                if (event.getModifierState("CapsLock")) {
                    text.style.display = "block";
                  } else {
                    text.style.display = "none"
                  }
                });
               
