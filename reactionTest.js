      var start = new Date().getTime();

      function randomColor() {
        var letters = "0123456789ABCDEF".split("");
        var hash = "#";
        var color = "";
        for (var i = 1; i <= 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }

        color = hash + color;
        return color;
      }

      function makeShapeAppear() {
        start = new Date().getTime();
        document.getElementById("shapes").style.display = "block";
        var topP = Math.random() * 260;
        var leftP = Math.random() * 700;
        var width = Math.random() * 150 + 100;
        document.getElementById("shapes").style.left = leftP + "px";
        document.getElementById("shapes").style.top = topP + "px";
        document.getElementById("shapes").style.width = width + "px";
        document.getElementById("shapes").style.height = width + "px";
        document.getElementById("shapes").style.backgroundColor = randomColor();

        if (Math.random() < 0.5) {
          document.getElementById("shapes").style.borderRadius = "50%";
        } else {
          document.getElementById("shapes").style.borderRadius = "0%";
        }
      }

      function afterDelay() {
        setTimeout(makeShapeAppear, Math.random() * 2000);
      }

      afterDelay();

      document.getElementById("shapes").onclick = function () {
        document.getElementById("shapes").style.display = "none";
        var end = new Date().getTime();
        var timeTakenToClick = (end - start) / 1000;
        document.getElementById("timeTaken").innerHTML = timeTakenToClick + "s";
        afterDelay();
      };