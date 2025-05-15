import React from 'react';

interface TileProps {
  dimensions: { width: number; height: number };
  imageUrl: string;
  label: string;
  onClick?: () => void;
}

export const Tile: React.FC<TileProps> = ({ dimensions, imageUrl, label, onClick }) => {
  const tileStyles: React.CSSProperties = {
    borderRadius: '10px' as const,
    background: 'var(--theme-primary)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' as const,
    transition: 'transform 0.2s ease-in-out' as const,
    width: `${dimensions.width}px` as const,
    height: `${dimensions.height}px` as const,
    display: 'flex' as const,
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    padding: '16px' as const,
    cursor: onClick ? 'pointer' : ('default' as const),
  };

  const imageStyles: React.CSSProperties = {
    width: '100%' as const,
    height: 'auto' as const,
    borderRadius: '8px' as const,
    marginBottom: '8px' as const,
  };

  const labelStyles: React.CSSProperties = {
    color: 'var(--text-primary)' as const,
    fontSize: '14px' as const,
    fontWeight: 500 as const,
    textAlign: 'center' as const,
  };

  return (
    <div style={tileStyles} onClick={onClick}>
      <img src={imageUrl} alt={label} style={imageStyles} />
      <div style={labelStyles}>{label}</div>
    </div>
  );
};
