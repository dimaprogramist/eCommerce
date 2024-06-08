<script>
        function showPopup() {
            document.getElementById("popup").style.display = "block";
        }

        function closePopup() {
            document.getElementById("popup").style.display = "none";
        }

        // закрытие поп-апа когда нажимаем на пустое место
        window.onclick = function (event) {
            let popup = document.getElementById("popup");
            if (event.target == popup) {
                popup.style.display = "none";
            }
        }
    </script>