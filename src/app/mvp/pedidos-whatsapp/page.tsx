import styles from "../../page.module.css";

export default function PedidosWhatsApp() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Pedidos por WhatsApp</h1>
          <p>
            Piloto para rotiserías/casas de comida (UY/AR): catálogo + pedido
            guiado + cobro + estados.
          </p>
        </div>

        <div className={styles.intro}>
          <h2>CTA</h2>
          <p>
            Si te interesa probarlo, escribime “QUIERO” por DM en X.
          </p>
        </div>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://x.com/bardo_botardo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mandar DM
          </a>
          <a className={styles.secondary} href="/">
            Volver
          </a>
        </div>
      </main>
    </div>
  );
}
