// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{html,js}", // Asegúrate de que tus rutas sean correctas
    ],
    theme: {
      extend: {
        colors: {
          cGrey: "#F2F3F9", // Ejemplo de color personalizado
        },
      },
    },
    plugins: [
      addDynamicIconSelectors(),
    ],
  }