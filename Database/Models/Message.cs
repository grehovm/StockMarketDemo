namespace StockMarketDemo.Database.Models
{
    public class Message
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Text { get; set; }
        public User User { get; set; }
    }

}