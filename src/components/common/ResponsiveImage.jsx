/**
 * Content photograph with srcset/sizes, intrinsic dimensions (no layout
 * shift) and a focal point. Lazy-loaded unless `priority` is set — use
 * `priority` only for images visible on first paint (e.g. the hero).
 *
 *   <ResponsiveImage image={images.hero} sizes="(max-width: 980px) 100vw, 44vw" priority />
 */
export default function ResponsiveImage({ image, sizes, priority = false, className }) {
  const { src, srcSet, width, height, alt, position } = image;

  return (
    <img
      className={className}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}
