'use client';

import { useRouter } from 'next/navigation';
import { createPortal } from "react-dom"
import css from "./Modal.module.css"
import React, { useCallback, useEffect } from "react"

interface ModalProps {
  children: React.ReactNode,
  onClose: () => void
}
export default function Modal({ children, onClose}: ModalProps) {
  const router = useRouter();
  
  const close = useCallback(() => {
    router.back();
  }, [router]);

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
          close();
        }
    };
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === "Escape") {
            close();
          }
        };
        
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
    
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
          document.body.style.overflow = "";
        };
    }, [close]);
    
    
    return createPortal(
    <div className={css.backdrop} role="dialog" aria-modal="true" onClick={handleBackdropClick}>
        <div className={css.modal}>
        {children}
        <button onClick={close}>Close</button>
        </div>
    </div>,
    document.body
    )
};



