export default function ErrorBlock({ msg }) {
  return (
    <div className="tw-block tw-text-red-400 tw-text-sm tw-mt-2">
      {msg}
    </div>
  );
}