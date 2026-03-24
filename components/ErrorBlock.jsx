export default function ErrorBlock({ msg }) {
  return (
    <div className="tw-mt-2 tw-block tw-text-sm tw-text-red-600">
      {msg}
    </div>
  );
}