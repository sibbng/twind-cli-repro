import { apply } from "twind";

export default {
  plugins: {
    btn: apply`
      py-2 px-4
      font-semibold
      rounded-lg shadow-md
      focus:(outline-none ring(2 indigo-400 opacity-75))
   `,
  },
};
