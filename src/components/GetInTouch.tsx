import { button, buttonLarge } from "./styles";

// The main call to action: every few seconds a soft band of lighter blue
// sweeps through the button (.sheen in globals.css). Still for reduced motion.
export function GetInTouch({ email, id, large = false }: { email: string; id?: string; large?: boolean }) {
  return (
    <a id={id} href={`mailto:${email}`} className={`${large ? buttonLarge : button} sheen text-white hover:opacity-80`}>
      Get in touch
    </a>
  );
}
