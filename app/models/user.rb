class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true, uniqueness: true
  validates :fname, :lname, :zipcode, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def self.convert_to_date(object)
    year = object["year"].to_i
    month = object["month"].to_i
    day = object["day"].to_i
    Date.new(year,month,day)
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end


  def valid_password?(password)
    bcryped_pw = BCrypt::Password.new(self.password_digest)
    bcryped_pw.is_password?(password)
  end


  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
