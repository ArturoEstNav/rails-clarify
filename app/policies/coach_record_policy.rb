class CoachRecordPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def show?
    true
  end

  def new?
    true
  end

  def create?
    record.user == user
  end

  def edit?
    true
  end

  def update?
    record.user == user
  end
end
