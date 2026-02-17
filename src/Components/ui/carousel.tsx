import React from "react";

export const Carousel: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => <div {...props} />;

export const CarouselContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => <div {...props} />;

export const CarouselItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => <div {...props} />;

export const CarouselNext: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => <button {...props} />;

export const CarouselPrevious: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => <button {...props} />;
