import Btn from "./components/btn";

export default function Errors() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-6xl font-display font-semibold text-muted">404</p>
      <p className="text-muted-strong">
        {"¯\\_(ツ)_/¯ nothing to see here."}
      </p>
      <Btn href="/" text="Back to home" />
    </div>
  );
}
