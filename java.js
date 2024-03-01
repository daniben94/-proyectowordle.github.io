document.addEventListener('DOMContentLoaded', function () {
  // Evento para el botón "Calcular"
  document.getElementById('calcular').addEventListener('click', function () {
      calcularHidratacion();
  });

  function calcularHidratacion() {
      // Obtener el valor ingresado en el campo de peso
      var peso = parseFloat(document.getElementById('peso').value);

      // Verificar si el peso es un número válido y mayor a 0
      if (!isNaN(peso) && peso > 0) {
          // Calcular la hidratación según el método de Holliday-Segar
          var hidratacion = calcularHollidaySegar(peso);

          // Mostrar los resultados
          mostrarResultados(hidratacion);
      } else {
          // Mostrar mensaje de error si el peso no es válido
          document.getElementById('error').style.display = 'block';
      }
  }

  function calcularHollidaySegar(peso) {
      var hidratacion = 0;

      if (peso <= 10) {
          hidratacion = peso * 100;
      } else if (peso <= 20) {
          hidratacion = 10 * 100 + (peso - 10) * 50;
      } else {
          hidratacion = 10 * 100 + 10 * 50 + (peso - 20) * 20;
      }

      return hidratacion;
  }

  function mostrarResultados(hidratacion) {
      // Mostrar la hidratación calculada
      document.getElementById('flu').textContent = hidratacion + 'cc/día';
      document.getElementById('flu').style.display = 'block';

      // Calcular y mostrar mantenimiento y m+m/2
      var mantenimiento = Math.round(hidratacion / 24);
      var mmMitad = Math.round(mantenimiento * 1.5);

      document.getElementById('man').textContent = 'Mantenimiento: ' + mantenimiento + 'cc/h | m+m/2: ' + mmMitad + 'cc/h';
      document.getElementById('man').style.display = 'block';

      // Ocultar mensaje de error si se mostraba
      document.getElementById('error').style.display = 'none';
  }
});
