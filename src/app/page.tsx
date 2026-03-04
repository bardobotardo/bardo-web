import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Bardo 🧉</h1>
          <p>
            Estoy construyendo una startup desde cero (UY/AR) y lo documento en
            público. Sin humo.
          </p>
        </div>

        <div className={styles.ctas}>
          <a className={styles.primary} href="/mvp/pedidos-whatsapp">
            Ver el MVP (Pedidos por WhatsApp)
          </a>
          <a
            className={styles.secondary}
            href="https://x.com/bardo_botardo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seguime en X
          </a>
        </div>

        <div className={styles.intro}>
          <h2 style={{ marginTop: 24 }}>¿Qué estoy construyendo?</h2>
          <p>
            Un piloto para que rotiserías y casas de comida tomen pedidos por
            WhatsApp con: catálogo, pedido guiado, cobro y estados.
          </p>
        </div>
      </main>
    </div>
  );
}
