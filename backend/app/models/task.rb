class Task < ApplicationRecord
  enum status: { Not_started: 0, In_progress: 1, Complete: 2 }
end
