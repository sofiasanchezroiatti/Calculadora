const calcular = document.getElementById("calcular");

calcular.addEventListener("click", calculadora);

function calculadora() {
   const cantidad = document.getElementById("cantidad").value;
   const colores = document.getElementById("color").value;

   const total = document.getElementById("total");
   let resultado = Number(cantidad * 20000);

   const resultCantidad = document.getElementById("resultCantidad");
   const resultColor = document.getElementById("resultColor");

   total.innerHTML = resultado;
   resultCantidad.innerHTML = cantidad;
   resultColor.style.background = colores;
}
