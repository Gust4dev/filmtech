import React, { useEffect } from "react";
import { ShieldAlert, Lock, Cpu } from "lucide-react";

export const LicenseLock: React.FC = () => {
  useEffect(() => {
    // Lock scrolling when the component is mounted
    document.body.style.overflow = "hidden";

    // Cleanup to restore scrolling if the component is unmounted
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#050505",
        backgroundImage:
          "radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)",
        zIndex: 9999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Keyframes for subtle animations */}
      <style>{`
        @keyframes pulse-gold {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        .gold-text {
          background: linear-gradient(135deg, #D4AF37 0%, #F1D279 50%, #B8860B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <main
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "520px",
          backgroundColor: "rgba(15, 15, 15, 0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(212, 175, 55, 0.15)",
          borderRadius: "24px",
          padding: "60px 40px",
          textAlign: "center",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.05)",
          overflow: "hidden",
        }}
      >
        {/* Animated Scan Line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)",
            animation: "scan 4s linear infinite",
            zIndex: 1,
          }}
        />

        {/* Icon Header */}
        <div
          style={{
            marginBottom: "40px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(212, 175, 55, 0.05)",
              border: "1px solid rgba(212, 175, 55, 0.2)",
              position: "relative",
            }}
          >
            <ShieldAlert size={48} color="#D4AF37" strokeWidth={1.5} />
            <div
              style={{
                position: "absolute",
                inset: "-8px",
                border: "1px solid rgba(212, 175, 55, 0.1)",
                borderRadius: "24px",
                animation: "pulse-gold 3s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        <h1
          className="gold-text"
          style={{
            fontSize: "1.75rem",
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: "5px",
            marginBottom: "20px",
            position: "relative",
            zIndex: 2,
          }}
        >
          Protocolo de Segurança
        </h1>

        <div
          style={{
            height: "1px",
            width: "60px",
            background: "#D4AF37",
            margin: "0 auto 30px",
            opacity: 0.5,
          }}
        />

        <p
          style={{
            color: "rgba(255, 255, 255, 0.85)",
            fontSize: "1.05rem",
            lineHeight: "1.8",
            fontWeight: "300",
            marginBottom: "40px",
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          Esta infraestrutura tecnológica encontra-se em regime de
          <span style={{ color: "#D4AF37", fontWeight: "500" }}>
            {" "}
            verificação de licenciamento exclusivo
          </span>
          . O acesso aos recursos da plataforma FilmTech foi temporariamente
          restrito para fins de auditoria de direitos de propriedade.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            marginBottom: "40px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {[
            { icon: Lock, label: "Acesso Restrito" },
            { icon: Cpu, label: "Sistemas Offline" },
            { icon: ShieldAlert, label: "Auditoria Ativa" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <item.icon
                size={18}
                color="rgba(212, 175, 55, 0.7)"
                style={{ marginBottom: "8px" }}
              />
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "rgba(255, 255, 255, 0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <footer
          style={{
            paddingTop: "30px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            fontSize: "0.75rem",
            color: "rgba(255, 255, 255, 0.4)",
            textTransform: "uppercase",
            letterSpacing: "2px",
            position: "relative",
            zIndex: 2,
          }}
        >
          Status:{" "}
          <span style={{ color: "#F1D279" }}>
            Aguardando Validação Administrativa
          </span>
        </footer>
      </main>
    </div>
  );
};
