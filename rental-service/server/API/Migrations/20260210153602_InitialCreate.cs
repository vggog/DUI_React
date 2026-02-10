using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    username = table.Column<string>(type: "character varying(15)", maxLength: 15, nullable: false),
                    email = table.Column<string>(type: "text", nullable: false),
                    password = table.Column<string>(type: "text", nullable: false),
                    user_type = table.Column<int>(type: "integer", nullable: false),
                    avatar = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "offers",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    title = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    description = table.Column<string>(type: "character varying(1024)", maxLength: 1024, nullable: false),
                    publish_date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    city = table.Column<int>(type: "integer", nullable: false),
                    preview_image = table.Column<string>(type: "text", nullable: false),
                    photos = table.Column<string>(type: "text", nullable: false),
                    is_premium = table.Column<bool>(type: "boolean", nullable: false),
                    is_favorite = table.Column<bool>(type: "boolean", nullable: false),
                    rating = table.Column<decimal>(type: "numeric(2,1)", nullable: false),
                    type = table.Column<int>(type: "integer", nullable: false),
                    rooms = table.Column<int>(type: "integer", nullable: false),
                    guests = table.Column<int>(type: "integer", nullable: false),
                    price = table.Column<int>(type: "integer", nullable: false),
                    features = table.Column<string>(type: "text", nullable: false),
                    comments_count = table.Column<int>(type: "integer", nullable: false),
                    latitude = table.Column<float>(type: "real", nullable: false),
                    longitude = table.Column<float>(type: "real", nullable: false),
                    author_id = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_offers", x => x.id);
                    table.ForeignKey(
                        name: "FK_offers_users_author_id",
                        column: x => x.author_id,
                        principalTable: "users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "reviews",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    text = table.Column<string>(type: "character varying(1024)", maxLength: 1024, nullable: false),
                    publish_date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    rating = table.Column<int>(type: "integer", nullable: false),
                    author_id = table.Column<int>(type: "integer", nullable: false),
                    offer_id = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_reviews", x => x.id);
                    table.ForeignKey(
                        name: "FK_reviews_offers_offer_id",
                        column: x => x.offer_id,
                        principalTable: "offers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_reviews_users_author_id",
                        column: x => x.author_id,
                        principalTable: "users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_offers_author_id",
                table: "offers",
                column: "author_id");

            migrationBuilder.CreateIndex(
                name: "IX_reviews_author_id",
                table: "reviews",
                column: "author_id");

            migrationBuilder.CreateIndex(
                name: "IX_reviews_offer_id",
                table: "reviews",
                column: "offer_id");

            migrationBuilder.CreateIndex(
                name: "IX_users_email",
                table: "users",
                column: "email",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "reviews");

            migrationBuilder.DropTable(
                name: "offers");

            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
