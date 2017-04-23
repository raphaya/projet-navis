package fr.bd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

/**
 * Cette classe fait un acces a une base de donnees. <br/>
 *
 * Exemple d'utilisatione : <br/>
 * AccesBD.getInstance().authentifier("df", "df");
 *
 */
public final class AccesBD {
	/** Nom de la data source. */
	public static final String DATA_SRC_NAME = "jdbc/netbankPool";
	private static AccesBD instance;

	private volatile DataSource dataSource;

	/**
	 * Constructeur private car singleton.
	 */
	private AccesBD() {
		super();
		// Singleton
	}

	/**
	 * Donne l'instance du singleton.
	 *
	 * @return l'instance du singleton.
	 */
	public static synchronized AccesBD getInstance() {
		if (AccesBD.instance == null) {
			AccesBD.instance = new AccesBD();
		}
		return AccesBD.instance;
	}

	/**
	 * Recupere une connexion
	 *
	 * @return une connexion
	 * @throws SQLException
	 *             si un probleme survient
	 */
	public final Connection getConnexion() throws SQLException {
		if (this.dataSource == null) {
			try {
				Context context = new InitialContext();
				this.dataSource = (DataSource) context.lookup("java:comp/env/" + AccesBD.DATA_SRC_NAME);
			} catch (Exception e) {
				throw new SQLException(e);
			}
		}

		return this.dataSource.getConnection();
	}

	/**
	 * Methode qui verifie que le login et le password vont bien ensemble. <br/>
	 *
	 * @param unLogin
	 *            un login
	 * @param unMdp
	 *            un mot de passe
	 * @return
	 *         <ul>
	 *         <li>-1: si un probleme provient du login</li>
	 *         <li>-2: si un probleme provient du mot de passe</li>
	 *         <li>l'id du client si tout se passe bien</li>
	 *         </ul>
	 * @throws SQLException
	 *             si une erreur survient
	 */
	public int authentifier(String unLogin, String unMdp) throws SQLException {
		Connection cxt = this.getConnexion();
		if (cxt != null && !cxt.isClosed()) {
			PreparedStatement request = null;
			ResultSet resultat = null;
			try {
				// Creation de l'objet de requete
				request = cxt.prepareStatement("select idJoueur, mdp from utilisateur where login=?");
				request.setString(1, unLogin);

				// Envoie de la requete et recuperation du resultat
				resultat = request.executeQuery();

				// Parcours du resultat, toujours commencer par un .next
				while (resultat.next()) {
					int id = resultat.getInt("idJoueur");
					boolean noid = resultat.wasNull();
					String password = resultat.getString("mdp");
					if (noid) {
						return -1;
					}
					return password == unMdp || password.equals(unMdp) ? id : -2;
				}
				return -1;
			} finally {
				this.closeAll(cxt, request, resultat);
			}
		} else {
			throw new SQLException("Connexion invalide!");
		}
	}

	/**
	 * Ferme tout quoi qu'il arrive.
	 *
	 * @param ctx
	 *            une connexion
	 * @param request
	 *            un statement
	 * @param resultat
	 *            le resultset
	 */
	private final void closeAll(Connection ctx, Statement request, ResultSet resultat) {
		// Tres IMPORTANT, on ferme tout
		if (resultat != null) {
			try {
				resultat.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		if (request != null) {
			try {
				request.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		if (ctx != null) {
			try {
				ctx.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * Effectue un virement entre deux comptes.
	 *
	 * @param cptSrc
	 *            le compte source
	 * @param cptDest
	 *            le compte destination
	 * @param unMontant
	 *            le montant qui sera retire du compte source et ajoute au
	 *            compte destination
	 * @throws SQLException
	 *             si une erreur survient
	 */

}