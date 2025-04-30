class Task < ApplicationRecord
  enum status: { not_started: 0, doing: 1, complete: 2 }
end
