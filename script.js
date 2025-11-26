  const inp = document.getElementById("myInput")
    const out = document.getElementById("output")

    inp.addEventListener("input", function () {
        out.textContent = inp.value
    })